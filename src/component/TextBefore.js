import React, { Component } from "react";
import TextMiddle from "./TextMiddle";
import ColourWheels from "./colourWheel/ColourWheels";

const yourDefaultColour = "rgb(255, 255, 255)";

class TextBefore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hed3: 18,
      none1: "none",
      hd1: "hd",
      selectedColour: yourDefaultColour,
    };
  }
  hendelonChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  clearColourWheel = () => {
    this.colourWheel.clear(() => {
      // Do some other stuff in this callback if you want -- other than re-setting your selectedColour.
      this.setState({ selectedColour: yourDefaultColour });
    });
  };
  hendelOnclick1 = () => {
    if (this.state.none1 == "none" && this.state.hd1 == "hd") {
      this.setState({ none1: "blok", hd1: "hdRed" });
    } else this.setState({ none1: "none", hd1: "hd" });
  };
  hedOnclick = () => {
    if (this.state.hed3 == 18) {
      this.setState({ hed3: 25 });
    } else this.setState({ hed3: 18 });
  };
  render() {
    const state = this.props;
    return (
      <div>
        <form>
          <input
            id="hed3"
            type="number"
            onChange={this.hedOnclick}
            value={this.state.hed3}
          />
          <br />
          <br />
          <div onClick={this.hendelOnclick1} className={this.state.hd1}>
            Color<i className="material-icons">color_lens</i>
          </div>
          <hr />
          <div className={this.state.none1}>
            <ColourWheels
              radius={200}
              padding={10}
              lineWidth={50}
              onColourSelected={(rgb) => this.setState({ selectedColour: rgb })}
              onRef={(ref) => (this.colourWheel = ref)}
              spacers={{
                colour: "#FFFFFF",
                shadowColour: "grey",
                shadowBlur: 5,
              }}
              preset // You can set this bool depending on whether you have a pre-selected colour in state.
              presetColour={this.state.selectedColour}
              animated
            />
          </div>
        </form>
        <TextMiddle state={state} state1={this.state} />
      </div>
    );
  }
}

export default TextBefore;
