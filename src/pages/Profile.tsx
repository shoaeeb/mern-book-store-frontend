import { useMyProfile, useUpdateMyProfile } from "@/api/MyUserApi";
import UserProfileForm from "@/components/UserProfileForm";

const Profile = () => {
  const { CurrentUser, isLoading } = useMyProfile();
  const { updateUser, isLoading: isUpdating } = useUpdateMyProfile();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!CurrentUser) {
    return <span>Unable to load user profile...</span>;
  }

  return (
    <UserProfileForm
      currentUser={CurrentUser}
      onSave={updateUser}
      isLoading={isUpdating}
    />
  );
};

export default Profile;
