import { Link } from "react-router-dom";

export const BackgroundCovered = '#282c34';
export const BackgroundUncovered = 'white';
export const MessageColorCovered = 'white';
export const MessageColorUncovered = 'black';

export const HighlightColor = 'yellow';
export const LinkColor = '#61dafb';
export const TopbarColor = '#61dafb';

export const GlobalToolBar = () => {
    return (
        <div className = "global-toolbar">
            <Link to = "/blockchain">Login</Link>
            &nbsp;|&nbsp;
            <Link to = "/blockchain/types">Profile</Link>
            &nbsp;|&nbsp;
            <Link to = "/blockchain/storage">Storage</Link>
            &nbsp;|&nbsp;
            <Link to = "/blockchain/history">History</Link>
        </div>
    )
}
