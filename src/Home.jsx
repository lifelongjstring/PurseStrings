export default function Home() {
    return (
      <div className="home-container">
        {/* Navbar */}
        <header className="navbar">
          <h1>💰 Purse Strings</h1>
          <button className="settings-btn">
            Settings
          </button>
        </header>

        {/* Percy the Mascot */}
        <div className="percy-container">
          <div className="percy-character">
            <div className="percy-body">
              <img src="/Percy-wave.png" alt="Percy the Goblin" className="percy-image" />
            </div>
            <div className="percy-speech-bubble">
              <p>Hi there! I'm Percy, your goblin financial advisor! 💰</p>
              <p>Let's make smart money moves together!</p>
            </div>
          </div>
        </div>
  
        {/* Dashboard - 4 Quadrants */}
        <main className="dashboard">
          {/* Quadrant 1: Total Balance */}
          <div className="quadrant balance-quadrant">
            <h3>Total Balance</h3>
            <p className="balance-amount">$12,340</p>
            <div className="quadrant-icon">💰</div>
          </div>

          {/* Quadrant 2: Income & Expenses */}
          <div className="quadrant income-expenses-quadrant">
            <div className="income-section">
              <h4>Monthly Income</h4>
              <p className="income-amount">$4,500</p>
            </div>
            <div className="expenses-section">
              <h4>Monthly Expenses</h4>
              <p className="expenses-amount">$2,900</p>
            </div>
            <div className="quadrant-icon">📊</div>
          </div>

          {/* Quadrant 3: Savings Goal */}
          <div className="quadrant savings-quadrant">
            <h3>Savings Goal</h3>
            <p className="savings-amount">$8,000</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '65%'}}></div>
            </div>
            <div className="quadrant-icon">🎯</div>
          </div>

          {/* Quadrant 4: Recent Transactions */}
          <div className="quadrant transactions-quadrant">
            <h3>Recent Transactions</h3>
            <ul className="transactions-list">
              <li className="transaction-item expense">
                <span className="transaction-name">Groceries</span>
                <span className="transaction-amount">- $120</span>
              </li>
              <li className="transaction-item income">
                <span className="transaction-name">Salary</span>
                <span className="transaction-amount">+ $2,500</span>
                <span className="percy-tip">💡 Percy says: Great job saving!</span>
              </li>
              <li className="transaction-item expense">
                <span className="transaction-name">Coffee</span>
                <span className="transaction-amount">- $5</span>
              </li>
              <li className="transaction-item income">
                <span className="transaction-name">Freelance</span>
                <span className="transaction-amount">+ $800</span>
                <span className="percy-tip">💡 Percy says: Side hustle income!</span>
              </li>
            </ul>
            <div className="quadrant-icon">📝</div>
          </div>
        </main>
      </div>
    );
  }