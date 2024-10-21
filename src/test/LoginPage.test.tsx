import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import { apiService } from "../services/apiService";
import { AUTH, DASHBOARD } from "../utils/constants";
import { UserAction } from "../enum/userAction";

jest.mock("../services/apiService");

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockAuthValue = {
  currentAuthState: {
    isAuthenticated: false,
  },
  dispatch: jest.fn(),
};

const renderWithProviders = () => {
  return render(
    <AuthContextProvider.Provider value={mockAuthValue}>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </AuthContextProvider.Provider>
  );
};

describe("LoginPage", () => {
  beforeEach(() => {
    renderWithProviders();
  });

  test("renders the login form", () => {
    expect(screen.getAllByText(/Login/i)).toHaveLength(2);
    expect(
      screen.getByPlaceholderText(/Enter your username/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your password/i)
    ).toBeInTheDocument();
  });

  test("displaying validation errors when submitting empty form", async () => {
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    expect(
      await screen.findByText(/Username is required/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Password is required/i)
    ).toBeInTheDocument();
  });

  test("displaying valiation error for invalid username", async () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter your username/i), {
      target: { value: "Yogitaa" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    expect(
      await screen.findByText(/Provide a valid username/i)
    ).toBeInTheDocument();
  });

  test("displaying valiation error for password that is too small", async () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), {
      target: { value: "Yogi" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    expect(
      await screen.findByText(/Password must be at least 6 characters/i)
    ).toBeInTheDocument();
  });

  test("displaying validation error for password to have atleast one uppercase letter", async () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), {
      target: { value: "yogitaa1" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));
    expect(
      await screen.findByText(
        /Password must contain atleast one uppercase letter/i
      )
    ).toBeInTheDocument();
  });
  test("displaying validation error for password to have atleast one lowercase letter", async () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), {
      target: { value: "YOGITAA1" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));
    expect(
      await screen.findByText(
        /Password must contain atleast one lowercase letter/i
      )
    ).toBeInTheDocument;
  });

  test("displaying validation error for password to have atleast one number", async () => {
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), {
      target: { value: "Yogitaa" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));
    expect(
      await screen.findByText(/Password must contain at least one number/i)
    );
  });

  test("displaying whether to show password or not", async () => {
    const passwordInput = screen.getByPlaceholderText(/Enter your password/i);
    expect(passwordInput).toHaveAttribute("type", "password");
    fireEvent.click(screen.getByLabelText(/Show password/i));
    expect(passwordInput).toHaveAttribute("type", "text");
  });

  test("submits form with valid data and navigates to dashboard", async () => {
    const mockResponse = { data: { entity: { accessToken: "mockToken" } } };

    (apiService.post as jest.Mock).mockResolvedValue(mockResponse);
    jest.spyOn(window.localStorage.__proto__, "setItem");

    fireEvent.change(screen.getByPlaceholderText(/Enter your username/i), {
      target: { value: "yogitaadevi.ravishankar@ideas2it.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), {
      target: { value: "Yogiravi@2003" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));
    await waitFor(() => {
      expect(apiService.post).toHaveBeenCalledWith(AUTH, {
        username: "yogitaadevi.ravishankar@ideas2it.com",
        password: "Yogiravi@2003",
      });

      expect(localStorage.setItem).toHaveBeenCalledWith(
        "accessToken",
        "mockToken"
      );

      expect(mockAuthValue.dispatch).toHaveBeenCalledWith({
        type: UserAction.AUTHENTICATE_USER,
      });

      expect(mockNavigate).toHaveBeenCalledWith(DASHBOARD, { replace: true });
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
