import NavTabs from './navTabs'

export default function Header() {
    return (
        <header>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Jason Cable</h1>
                <NavTabs />
            </div>
        </header>
    );
}