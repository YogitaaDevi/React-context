interface ProfileCardProps {
  data: any
}

const ProfileCard = ({data}: ProfileCardProps) => {
  return (
    <div className="w-64 h-8 flex">
      <div className="w-36 font-bold text-xl">
        {data.key}
      </div>
      <div className="text-lg">
        {data.value}
      </div>
    </div>
  )
}

export default ProfileCard
