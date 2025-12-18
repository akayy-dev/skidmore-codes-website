export default function Index() {
    return (
        <div style={{ 
           
            // 1. Set the background image from the public folder
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url("/background.jpeg")', 
            
            // 2. Center and cover the top half
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50vh', // Takes up the top 50% of the screen
            width: '96%',

            // 3. Flex layout for the headings
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "flex-start", 
            paddingTop: '20px', 
            paddingLeft: '40px',
            paddingRight: '40px',
            fontSize: "1.5rem",
            color: "white"

        }}>

            <h1 style={{ margin: 0 }}>Skidmore Codes</h1>


            <div style={{ display: "flex", gap: "60px", fontSize: "1.5rem" }}>
                <a href="/about" style={{color:'white'}}> About Us</a>
                <a href="/activities" style={{color:'white'}}> Activities</a>   
                <a href="/opportunities" style={{color:'white'}}> Opportunities</a>   
                <a href="/other" style={{color:'white'}}> Other</a>
            </div>
        </div>
    )
}