import EditAccountForm from "../components/EditAccountForm";
import Header from "../components/Header";

function UserInformation() {
  return (
    <>
    <Header/>
    <div className="p-6">
      <EditAccountForm />
    </div>
    </>
  );
}

export default UserInformation;
