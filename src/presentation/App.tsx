import "../modules/auth/AuthModule";
import { AuthModule } from "../modules/auth/AuthModule";
import { AuthDataSource } from "../modules/auth/domain/AuthDataSource";
import { setup } from "./contexts/ModuleProvider/withModule";
import { useProvider } from "./hooks/useProvider";

const withAuthModule = setup(AuthModule);

function App() {
    const authDataSource = useProvider(AuthDataSource);

    return <div className="App"></div>;
}

export default withAuthModule(App);
