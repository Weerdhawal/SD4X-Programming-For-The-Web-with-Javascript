class FontChooser extends React.Component {

    constructor(props) {
	super(props);
  var min = this.props.min >1 ? parseInt(this.props.min) :1
  var max = parseInt(this.props.max);
  if (max<min) [min,max]=[max,min]
  var size = parseInt(this.props.size)
  if (size<min) size = min
  if (size>max) size = max
  var originalSize=size;

  this.state= {isBold: this.props.bold=='true',
               min: min,
               max:max,
               isHidden:true,
               originalSize:size,
               size:parseInt(size)};
    }






    toggle() {
      console.log(this.state.isHidden)
      this.setState({isHidden : !this.state.isHidden},function(){
        console.log(this.state.isHidden)
      });

  		var formElements = document.getElementsByClassName("tog");

      for (var i=0; i < formElements.length;i++) {
  			formElements[i].hidden = this.state.isHidden;

  		}

     }



    ChangeCheckbox() {
      this.setState({isBold : !this.state.isBold});
    }

    decreaseFontSize() {
      if (this.state.size > this.state.min) {
        this.setState({size : parseInt(this.state.size - 1)});
      }
    }

    increaseFontSize() {
      if (this.state.size < this.state.max) {
        this.setState({size : this.state.size + 1});
      }
    }

    resetFontSize() {
      this.setState({size : parseInt(this.state.originalSize)});
    }

    render() {
      var col = (this.state.size == this.state.min || this.state.size == this.state.max) ? 'red' : 'black';
      var fon =  this.state.isBold? 'bold': 'normal' ;
      var inStyle ={fontSize: this.state.size, fontWeight:fon ,color:col}
	return(
	       <div>
	       <input class="tog"  type="checkbox" id="boldCheckbox" hidden={this.state.isHidden} defaultChecked={this.state.isBold} onChange={this.ChangeCheckbox.bind(this)}/>
	       <button class="tog"  id="decreaseButton" hidden={this.state.isHidden} onClick={this.decreaseFontSize.bind(this)}>-</button>
	       <span class="tog"  id="fontSizeSpan" hidden={this.state.isHidden} onDoubleClick={this.resetFontSize.bind(this)}>{this.state.size}</span>
	       <button class="tog"  id="increaseButton" hidden={this.state.isHidden}	onClick={this.increaseFontSize.bind(this)}>+</button>
	       <span id="textSpan" style={inStyle}
         onClick={this.toggle.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}
