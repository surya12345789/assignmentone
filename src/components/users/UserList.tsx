import { User } from '../interface/User';

interface iUserListProps {
    users: User[]
}

const UserList: React.FC<iUserListProps> = ({users}) => {
    return (
        <>
            <h3>User List</h3>
            <table>
                <thead>
                    <tr>
                        <td>Sl No.</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default UserList;