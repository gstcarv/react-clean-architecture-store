import { Avatar, Box, Text } from "@chakra-ui/react";
import { UserData } from "../../../modules/user/domain/UserData";
import InformationLabel from "./InformationLabel";

type Props = {
    userData: UserData;
};

export default function ProfileInformation({ userData }: Props) {
    return (
        <Box mt={10}>
            <Avatar name="Profile" src={userData.avatarUrl} size={"2xl"} />

            <InformationLabel title="Name">{userData.name}</InformationLabel>

            <InformationLabel title="Description">{userData.description}</InformationLabel>

            <InformationLabel title="Location">{userData.location}</InformationLabel>

            <InformationLabel title="Company">{userData.company}</InformationLabel>
        </Box>
    );
}
