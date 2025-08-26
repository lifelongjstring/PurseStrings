export default function Home() {
    return (
      <div className="home-container">
        {/* Navbar */}
        <header className="navbar">
          <h1>💰 PurseStrings</h1>
          <button className="settings-btn">
            Settings
          </button>
        </header>

        {/* Percy the Learning Guide */}
        <div className="percy-container">
          <div className="percy-character">
            <div className="percy-body">
              <img src="/Percy-wave.png" alt="Percy the Financial Guide" className="percy-image" />
            </div>
            <div className="percy-speech-bubble">
              <p>Hi there! I'm Percy, your financial literacy companion! 💰</p>
              <p>Ready to boost your money skills?</p>
            </div>
          </div>
        </div>
  
        {/* Dashboard - 4 Learning Quadrants */}
        <main className="dashboard">
          {/* Quadrant 1: Learning Progress */}
          <div className="quadrant progress-quadrant">
            <h3>Financial Progress</h3>
            <p className="progress-amount">75%</p>
            <div className="progress-circle">
              <div className="progress-fill-circle" style={{transform: 'rotate(270deg)'}}></div>
            </div>
            <div className="quadrant-icon">📈</div>
          </div>

          {/* Quadrant 2: Current Streak & Time */}
          <div className="quadrant streak-quadrant">
            <div className="streak-section">
              <h4>Learning Streak</h4>
              <p className="streak-amount">🔥 7 Days</p>
            </div>
            <div className="time-section">
              <h4>Today's Goal</h4>
              <p className="time-amount">⏱️ 15 min</p>
            </div>
            <div className="quadrant-icon">🎯</div>
          </div>

          {/* Quadrant 3: Next Lesson */}
          <div className="quadrant lesson-quadrant">
            <h3>Next Lesson</h3>
            <p className="lesson-title">Budgeting Basics</p>
            <div className="lesson-progress">
              <span className="lesson-module">Module 3 of 5</span>
              <div className="lesson-bar">
                <div className="lesson-fill" style={{width: '60%'}}></div>
              </div>
            </div>
            <div className="quadrant-icon">📖</div>
          </div>

          {/* Quadrant 4: Recent Achievements */}
          <div className="quadrant achievements-quadrant">
            <h3>Recent Achievements</h3>
            <ul className="achievements-list">
              <li className="achievement-item badge">
                <span className="achievement-name">First Money Lesson</span>
                <span className="achievement-icon">🥇</span>
                <span className="percy-tip">💡 Percy says: Great start to your financial journey!</span>
              </li>
              <li className="achievement-item streak">
                <span className="achievement-name">3-Day Learning Streak</span>
                <span className="achievement-icon">🔥</span>
                <span className="percy-tip">💡 Percy says: Consistency builds wealth!</span>
              </li>
              <li className="achievement-item lesson">
                <span className="achievement-name">Budgeting Module Complete</span>
                <span className="achievement-icon">✅</span>
              </li>
              <li className="achievement-item time">
                <span className="achievement-name">30 Min Study Session</span>
                <span className="achievement-icon">⏰</span>
              </li>
            </ul>
            <div className="quadrant-icon">🏆</div>
          </div>
        </main>
      </div>
    );
  }