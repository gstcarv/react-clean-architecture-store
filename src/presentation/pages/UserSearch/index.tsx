import BaseLayout from "../../components/BaseLayout";
import ProfileInformation from "../../components/ProfileInformation";
import SearchHeader from "../../components/SearchHeader";

export default function UserSearch() {
    return (
        <BaseLayout>
            <SearchHeader />

            <ProfileInformation />
        </BaseLayout>
    );
}
