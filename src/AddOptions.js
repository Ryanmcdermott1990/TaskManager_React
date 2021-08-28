import React, { Component } from 'react';

    class AddOptions extends Component {
        constructor(props) {
            super(props);
        
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            options: props.options
          };
        }

     //Add option handler
  handleAddOption(e) {
    if (!e) {
      return 'Please enter a valid value';
    }
    else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
         const error =  this.props.handleAddOption(option);
  
      this.setState(() => (
     { error }));
     return(
         <p>Something</p>
     )
  
  if (!error)
      {
      e.target.elements.option.value = '';
      }
      

    // Concatenating previous state, (adding another option)
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  handleInputChange= (e) => {
    console.log(e.target.option)
  }
  // Render method for options. 
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" onChange={this.handleInputChange}/>
          <button>Add Option</button>
        </form>
            
             {/* <Options
               key={option}
               optionText={option}
               deleteOption={props.deleteOption}
             /> */}
           </div>
         )}

 }

export default AddOptions;