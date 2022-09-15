import React from 'react'
import study from "./img/undraw_predictive_analytics_re_wxt8.svg"
import "./app.scss"

const App = () => {
    return (
        <div className='App'>
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-6'>
                </div>
                <div className='col-6'>
                    <img className="mt-5 h-100" alt="studyimg" src={study} />
                </div>
            </div>
        </div>
        <div className='row bottom bg-secondary'><p>あああああああああああああ</p></div>
        </div>
    )
}

export default App