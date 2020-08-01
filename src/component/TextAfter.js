import React, { Component } from "react";
import TextBefore from "./TextBefore";
import ColourWheel from "./colourWheel/ColourWheel";

const yourDefaultColour = "rgb(255, 255, 255)";

class TextAfter extends Component {
  state = {
    text: " ",
    hed: 14,
    fontSize: "",
    textColor: "",
    none: "none",
    hd: "hd",
    selectedColour: yourDefaultColour,
  };
  hendelonChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  clearColourWheel = () => {
    this.colourWheel.clear(() => {
      // Do some other stuff in this callback if you want -- other than re-setting your selectedColour.
      this.setState({ selectedColour: yourDefaultColour });
    });
  };
  hendelOnclick = () => {
    if (this.state.none == "none" && this.state.hd == "hd") {
      this.setState({ none: "blok", hd: "hdRed" });
    } else this.setState({ none: "none", hd: "hd" });
  };

  hedOnclick = () => {
    if (this.state.hed == 14) {
      this.setState({ hed: 27 });
    } else this.setState({ hed: 14 });
  };
  render() {
    return (
      <div className="boxInput">
        <form>
          <label>Text</label>
          <input
            type="text"
            id="text"
            name="text"
            onChange={this.hendelonChange}
            value={this.state.text}
          />
          <label>Height</label>
          <input
            id="hed"
            type="number"
            name="hed"
            onChange={this.hedOnclick}
            value={this.state.hed}
          />
          <label>FontSize</label>
          <input
            type="number"
            id="fontSize"
            name="fontSize"
            onChange={this.hendelonChange}
            value={this.state.fontSize}
          />

          <br />
          <br />
          <div onClick={this.hendelOnclick} className={this.state.hd}>
            Color<i className="material-icons">color_lens</i>
          </div>
          <hr />
          <div className={this.state.none}>
            <ColourWheel
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
        <TextBefore store={this.state} />
      </div>
    );
  }
}

export default TextAfter;
