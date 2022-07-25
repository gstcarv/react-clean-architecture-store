import { Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";
import { UserData } from "../../../modules/user/domain/UserData";
import { UserModule } from "../../../modules/user/UserModule";
import BaseLayout from "../../components/BaseLayout";
import ProfileInformation from "../../components/ProfileInformation";
import SearchHeader from "../../components/SearchHeader";
import withModule from "../../contexts/ModuleProvider/withModule";

export const withUserModule = withModule(UserModule);

function UserSearch() {
    const [userData, setUserData] = useState<UserData | null>(null);

    const [showErrorAlert, setShowErrorAlert] = useState(false);

    return (
        <BaseLayout>
            <SearchHeader
                onDataFetched={(user) => {
                    setUserData(user);
                    setShowErrorAlert(false);
                }}
                onFetchError={() => {
                    setShowErrorAlert(true);
                    setUserData(null);
                }}
            />

            {showErrorAlert && (
                <Alert status="error" mt={5}>
                    <AlertIcon />
                    An error occurs trying to fetch user information. Check if the profile id is correct.
                </Alert>
            )}

            {!!userData && <ProfileInformation userData={userData} />}
        </BaseLayout>
    );
}

export default withUserModule(UserSearch);
