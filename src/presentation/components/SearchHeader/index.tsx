import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { UserData } from "../../../modules/user/domain/UserData";
import { UserDataSource } from "../../../modules/user/domain/UserDataSource";
import { useProvider } from "../../hooks/useProvider";

type Props = {
    onDataFetched: (user: UserData | null) => void;
    onFetchError: () => void;
};

export default function SearchHeader({ onDataFetched, onFetchError }: Props) {
    // Injecting UserDataSource abstraction to receive its implementation from current module
    const userDataSource = useProvider(UserDataSource);

    const profileFieldRef = useRef<HTMLInputElement>(null);

    const [isLoading, setIsLoading] = useState(false);

    async function handleFetchUser() {
        const profile = profileFieldRef.current?.value;
        if (!profile) return;

        try {
            setIsLoading(true);

            const user = await userDataSource.getByProfile(profile);

            onDataFetched(user);
        } catch (err) {
            onFetchError();
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Box mt={10}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleFetchUser();
                }}
            >
                <FormControl>
                    <FormLabel>Github Profile</FormLabel>
                    <Input placeholder="Enter user's id to get profile information" ref={profileFieldRef} />
                </FormControl>

                <Button mt={4} colorScheme="teal" type="submit" isLoading={isLoading}>
                    Search Profile
                </Button>
            </form>
        </Box>
    );
}
