import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import { apiService } from "../services/apiService";
import { AUTH, DASHBOARD } from "../utils/constants";
import { UserAction } from "../enum/userAction";

jest.mock("../services/apiService");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const mockAuthValue = {
  currentState: {
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

  test("submits form with valid data and navigates to dashboard", async () => {
    const mockNavigate = jest.fn();
    const mockDispatch = jest.fn();
    (apiService.post as jest.Mock).mockResolvedValue({
      data: { entity: { accessToken: "mockToken" } },
    });

    render(
      <AuthContextProvider.Provider
        value={{ ...mockAuthValue, dispatch: mockDispatch }}
      >
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </AuthContextProvider.Provider>
    );
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
      expect(mockDispatch).toHaveBeenCalledWith({
        type: UserAction.AUTHENTICATE_USER,
      });
      expect(mockNavigate).toHaveBeenCalledWith(DASHBOARD, { replace: true });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});