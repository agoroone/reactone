import React from 'react'

function RecruitmentForm() {
    return (
      
      <div>
          
          <section>
              
                
 <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>

          </section>
          


    </div>
  )
}

export default RecruitmentForm
