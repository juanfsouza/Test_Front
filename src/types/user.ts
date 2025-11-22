export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface UserCardProps {
    user: User;
    onClick: (user: User) => void;
}

export interface UserModalProps {
    user: User | null;
    onClose: () => void;
}

export interface Props {
    users: User[];
}
