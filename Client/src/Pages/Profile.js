import './Profile.css';

export default function ProfilePage() {
    return (
        <div className="ProfilePage">
            <h1>Profile</h1>
            <h2>Name: John Smith</h2>
            <h2>Email: john.smith@example.com</h2>
            <h3>Account ID: 69420</h3>
            <a href="/login">click here to change password</a>
        </div>
    )

}