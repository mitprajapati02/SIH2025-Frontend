import { useLocation } from "react-router-dom";
import "../styles/AdminDashboard.css";

function AdminLayout() {
    const location = useLocation();
    const data = location.state?.data;

    if (!data) {
        return <p>No data available. Please upload sheets first.</p>;
    }

    const { summary, mentor, students } = data;

    // Pick background color by risk
    const getRowColor = (risk) => {
        if (risk === "High") return "#ff6392";
        if (risk === "Medium") return "#ffe45e";
        if (risk === "Low") return "#90ee90";
        return "#fff";
    };

    return (
        <main>
            <div className="main-inner-container">
                {/* Summary Cards */}
                <div className="student-statistics">
                    <div className="admin-state total-student" style={{ backgroundColor: "#7fc8f8" }}>
                        <h2>Total Students</h2>
                        <p>{summary.total_students}</p>
                    </div>
                    <div className="admin-state at-risk-student" style={{ backgroundColor: "#ff6392" }}>
                        <h2>At Risk Students</h2>
                        <p>{summary.high_risk_students}</p>
                    </div>
                    <div className="admin-state predicted-dropout" style={{ backgroundColor: "#e1e5f2" }}>
                        <h2>Predicted Drop-out percentage</h2>
                        <p>{summary.dropout_percentage}%</p>
                    </div>
                    <div className="admin-state mentor-name" style={{ backgroundColor: "rgba(33, 150, 243,0.7)" }}>
                        <h2>Mentor Name</h2>
                        <p>{mentor.name}</p>
                    </div>
                    <div className="admin-state status" style={{ backgroundColor: "rgba(144, 238, 144, 0.5)" }}>
                        <h2>Status</h2>
                        <p>{summary.overall_status}</p>
                    </div>
                </div>

                {/* Student Table */}
                <div className="sheet-statistics">
                    <div className="filter-list">
                        <h3>Applied Filters</h3>
                        <p>Attendance ≥ {data.filters.min_attendance}%</p>
                        <p>Marks ≥ {data.filters.min_marks}</p>
                        <p>Fee Status: {data.filters.fee_status}</p>
                    </div>

                    <div className="table-of-student-list">
                        <div className="list-table-row">
                            <div style={{ fontWeight: "bold" }}>Student Id</div>
                            <div style={{ fontWeight: "bold" }}>Name</div>
                            <div style={{ fontWeight: "bold" }}>Avg Attendance</div>
                            <div style={{ fontWeight: "bold" }}>Avg Marks</div>
                            <div style={{ fontWeight: "bold" }}>Fees Status</div>
                            <div style={{ fontWeight: "bold" }}>Risk Level</div>
                        </div>

                        {students.map((s, index) => (
                            <div key={index} className="list-table-row" style={{ backgroundColor: getRowColor(s.risk_level) }}>
                                <div>{s.roll_no}</div>
                                <div>{s.name}</div>
                                <div>{s.avg_attendance.toFixed(1)}%</div>
                                <div>{s.avg_marks.toFixed(1)}</div>
                                <div>{s.fee_status}</div>
                                <div>{s.risk_level}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legend */}
                <div className="tool-tip-and-export">
                    <div className="export-button">
                        <button className="btn-export">Export Data</button>
                    </div>

                    <div className="tool-tip">
                        <div className="legend-item">
                            <span className="legend-color high"></span>
                            <span>High</span>
                        </div>
                        <div className="legend-item">
                            <span className="legend-color medium"></span>
                            <span>Medium</span>
                        </div>
                        <div className="legend-item">
                            <span className="legend-color low"></span>
                            <span>Low</span>
                        </div>
                        <span style={{ color: "#333" }}> Drop-out chances</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AdminLayout;
