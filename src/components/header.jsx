import NavTabs from './navTabs'

export default function Header() {
    return (
        <header 
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1001 }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
                <h1 className='display-1 fw-normal'>Jason Cable</h1>
                <NavTabs />
            </div>
        </header>
    );
}