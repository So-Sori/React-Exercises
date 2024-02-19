import { useState } from "react";

interface Props{
    title: string;
    op1:string;
    op2:string;
    op3:string;
}


function Feedback({title,op1,op2,op3}:Props) {
    const [feedbacks,setFeedback] = useState({good:0, neutral: 0, bad: 0});
        

  return <>
            <h2 className="fs-1 text-center">{title}</h2>
        <div className="container p-2 d-flex align-items-center justify-content-center">
            <button type="button" className="btn btn-outline-success m-2" onClick={() => setFeedback({...feedbacks,good: feedbacks.good + 1})}>{op1}</button>

            <button type="button" className="btn btn-outline-secondary m-2" onClick={() => setFeedback({...feedbacks,neutral: feedbacks.neutral + 1})}>{op2}</button>

            <button type="button" className="btn btn-outline-danger m-2" onClick={() => setFeedback({...feedbacks,bad: feedbacks.bad + 1})}>{op3}</button>
        </div>

        <div className="container d-flex flex-wrap align-items-center justify-content-center mb-5">
            <div className="container h2 text-center">Statistics</div>
            <div className="fs-3 m-2">
            Good: {feedbacks.good}
            </div>
            <div className="fs-3 m-2">
            Neutral: {feedbacks.neutral}
            </div>
            <div className="fs-3 m-2">
            Bad: {feedbacks.bad}
            </div>
            <div className="container fs-3 text-center">
                <div className="m-2">
                    Total: {feedbacks.good + feedbacks.bad + feedbacks.neutral}
                </div>
                <div className="m-2">
                    Average: {Math.round((feedbacks.good + feedbacks.bad + feedbacks.neutral)/3)}
                </div>
            </div>
        </div>
    </>
}

export default Feedback