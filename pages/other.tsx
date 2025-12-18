export default function Other() {
    return (
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr auto 1fr", // Creates three equal columns
        alignItems: "center", 
        padding: "20px" 
      }}>
        
      {/* 1. Left Slot: Go Home */}
      <div style={{ justifySelf: "start" }}>
      <a href="/" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Skidmore Codes
      </a>
      </div>
  
      {/* 2. Middle Slot: Title */}
      <h1 style={{ margin: 0 }}>Other</h1>
  
      {/* 3. Right Slot: Empty (This balances the grid so the title stays centered) */}
      <div></div>
  
      </div>
    )
  }