import { Component } from "react";
import MuiTextField from "./components/MuiTextField";
import MuiButton from "./components/MuiButton";
import Results from "./components/Results";
import SingleResult from "./components/SingleResult";
import Box from "@mui/material/Box";

interface propsType {}
interface stateType {
    digitUser: string;
    search: [];
    moreDetails: boolean;
    moreDetailsResult: {};
}

class App extends Component<propsType, stateType> {
    constructor(props: propsType) {
        super(props);
        this.state = { digitUser: "", search: [], moreDetails: false, moreDetailsResult: {} };
    }

    digitUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ digitUser: event.target.value });
    };

    submit = () => {
        this.setState({ moreDetails: false });
        let URL = `https://api.tvmaze.com/search/shows?q=${this.state.digitUser}`;
        fetch(URL)
            .then((res) => res.json())
            .then((res) => {
                this.setState({ search: res });
            });
    };

    moreDetailsFn = (id: number) => {
        this.setState({ moreDetails: true });

        const URL = ` https://api.tvmaze.com/shows/${id}`;

        fetch(URL)
            .then((res) => res.json())
            .then((res) => {
                this.setState({ moreDetailsResult: res });
            });
    };

    render = () => {
        const { search, moreDetails, moreDetailsResult } = this.state;
        if (search.length === 0) {
            return (
                <>
                    <Box sx={{ width: "100%", height: "100%", bgcolor: "#fff" }}>
                        <MuiTextField action={this.digitUserChange} />
                        <MuiButton action={this.submit} />
                    </Box>
                </>
            );
        }
        if (moreDetails) {
            return (
                <div className="App">
                    <MuiTextField action={this.digitUserChange} />
                    <MuiButton action={this.submit} />
                    <SingleResult respJSON={moreDetailsResult} />
                </div>
            );
        }
        return (
            <div className="App">
                <MuiTextField action={this.digitUserChange} />
                <MuiButton action={this.submit} />
                <Results action={this.moreDetailsFn} respJSON={search} />
            </div>
        );
    };
}

export default App;
