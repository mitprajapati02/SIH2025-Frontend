import '../styles/DropSheet.css';
import Footer from './Footer';
import Header from './Header';



function DropSheet() {
    return (
        <>
            <Header />
            <main>
                <div className="drop-sheet-section ">
                    <div className="drop-sheet-one"
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        <label className="upload-label" style={{ color: '#00171f', fontWeight: 'bold', fontSize: '1.5rem' }}>
                            Upload Attendance File
                        </label>

                        <br />

                        <label className="custom-file-upload">
                            <input type="file" accept=".csv,.xlsx" />
                            Choose File
                        </label>

                        <span className="file-name">No file chosen</span>
                    </div>
                    <div className="drop-sheet-one"
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        <label className="upload-label" style={{ color: '#00171f', fontWeight: 'bold', fontSize: '1.5rem' }}>
                            Upload Marks File
                        </label>

                        <br />

                        <label className="custom-file-upload">
                            <input type="file" accept=".csv,.xlsx" />
                            Choose File
                        </label>

                        <span className="file-name">No file chosen</span>
                    </div>
                    <div className="drop-sheet-one"
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        <label className="upload-label" style={{ color: '#00171f', fontWeight: 'bold', fontSize: '1.5rem' }}>
                            Upload Fees File
                        </label>

                        <br />

                        <label className="custom-file-upload">
                            <input type="file" accept=".csv,.xlsx" />
                            Choose File
                        </label>

                        <span className="file-name">No file chosen</span>
                    </div>




                </div>
                <div className="drop-sheet-before-submit">
                    <div className="condition-and-mentor">
                        <div className="sheet-conditions">
                            <h2>Filters / Thresholds</h2>

                            <div className="form-group range-group">
                                <label>Minimum Attendance %:</label>
                                <div className="slider-with-value">
                                    <input type="range" min="50" max="100" defaultValue="75" />
                                    <span className="range-value">75%</span>
                                </div>
                            </div>


                            <div className="form-group">
                                <label>Minimum Marks Required:</label>
                                <input type="number" min="0" max="100" defaultValue="35" style={{ width: '50%' }} />
                            </div>

                            <div className="form-group radio-group">
                                <label>Fee Status:</label>
                                <div>
                                    <input type="radio" name="fees" value="due" defaultChecked />
                                    <span>Due</span>
                                </div>
                                <div>
                                    <input type="radio" name="fees" value="overdue" />
                                    <span>Overdue</span>
                                </div>
                                <div>
                                    <input type="radio" name="fees" value="paid" />
                                    <span>Paid</span>
                                </div>
                            </div>
                        </div>

                        <div className="sheet-assign-mentor">
                            <center><h2 style={{ color: '#333' }}>Assign Mentor</h2></center>
                            <div className="form-group">
                                <label>Mentor Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Mentor Name"
                                    defaultValue="John Doe"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Mentor Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter Mentor Email"
                                    defaultValue="john@example.com"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sheet-submit-button">
                        <button type="submit" className="btn-submit">Merge & Insight</button>
                    </div>
                </div>

            </main>
            <Footer />

        </>
    )
}

export default DropSheet;