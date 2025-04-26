import { createContext, useContext, useState } from 'react';

interface UserContextType {
    isPlaying: boolean;
    setisPlaying: (state: boolean) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [isPlaying, setisPlaying] = useState<boolean>(false);

    return (
        <UserContext.Provider value={{ isPlaying, setisPlaying }}>
            {children}
        </UserContext.Provider>
    );
};
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used inside a UserProvider');
    }
    return context;
};