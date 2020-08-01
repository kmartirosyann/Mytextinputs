import React, { Component } from "react";
import Style from "style-it";
import ColourWheelss from "./colourWheel/ColourWheelss";

const yourDefaultColour = "rgb(255, 255, 255)";

class TextMiddle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hed2: 17,
      textColor2: "",
      textColors2: "",
      test5: -28,
      test6: -2,
      test7: -2,
      test8: -2,
      none2: "none",
      hd2: "hd",
      selectedColour: yourDefaultColour,
    };
  }
  hendelonChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
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
  hendelOnclick1 = () => {
    if (this.state.none2 == "none" && this.state.hd2 == "hd") {
      this.setState({ none2: "blok", hd2: "hdRed" });
    } else this.setState({ none2: "none", hd2: "hd" });
  };
  hedOnclick = () => {
    if (this.state.hed2 == 17) {
      this.setState({ hed2: 26 });
    } else this.setState({ hed2: 17 });
  };
  render() {
    let hed = this.props.state.store.hed;
    let hed3 = this.props.state1.hed3 + hed;
    let hed2 = this.state.hed2 + hed3;
    var shadow2 = "";
    for (var i = 0; i <= hed2; i++) {
      shadow2 +=
        (shadow2 ? "," : "") +
        -i * 1 +
        "px" +
        " " +
        i * 1 +
        "px" +
        " " +
        0 +
        "px" +
        " " +
        `${this.state.selectedColour}`;
    }

    var shadow = "";
    for (var x = 0; x <= hed; x++) {
      shadow +=
        (shadow ? "," : "") +
        -x * 1 +
        "px" +
        " " +
        x * 1 +
        "px" +
        " " +
        0 +
        "px" +
        " " +
        `${this.props.state.store.selectedColour}`;
    }

    var shadow3 = "";
    for (var y = 0; y <= hed3; y++) {
      shadow3 +=
        (shadow3 ? "," : "") +
        -y * 1 +
        "px" +
        " " +
        y * 1 +
        "px" +
        " " +
        0 +
        "px" +
        " " +
        `${this.props.state1.selectedColour}`;
    }

    return (
      <Style>
        {`#pilo {
        display: inline-block;
        transform: rotate3d(${this.state.test5}, ${this.state.test6},${this.state.test7},${this.state.test8}deg)skew(20deg);
        font-size: ${this.props.state.store.fontSize}px;
        text-shadow:${shadow2};
        color:${this.props.state.store.selectedColour}; 
     }
        #pilo::after {
          display: inline-block;
         content:"${this.props.state.store.text}";
         font-size: ${this.props.state.store.fontSize}px;
         text-shadow:${shadow};
          
         
        }
        #pilo::before {
          display: inline-block;
         content:"${this.props.state.store.text}";
         font-size: ${this.props.state.store.fontSize}px;
         text-shadow:${shadow3};
         
         }
       
     `}
        <div>
          <div className="viw">
            <h1 className="text" id="pilo">
              {this.props.state.store.text}
            </h1>
          </div>
          <form action="#">
            <label>height</label>
            <input
              id="hed2"
              type="number"
              onChange={this.hedOnclick}
              value={this.state.hed2}
            />
            <br />
            <br />
            <div onClick={this.hendelOnclick1} className={this.state.hd2}>
              Color<i className="material-icons">color_lens</i>
            </div>
            <hr />
            <div className={this.state.none2}>
              <ColourWheelss
                radius={200}
                padding={10}
                lineWidth={50}
                onColourSelected={(rgb) =>
                  this.setState({ selectedColour: rgb })
                }
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
            <label>Text-X</label>
            <p className="range-field">
              <input
                type="range"
                id="test5"
                onChange={this.hendelonChange}
                min="-30"
                max="300"
                value={this.state.test5}
              />
            </p>
            <label>Text-Y</label>
            <p className="range-field">
              <input
                type="range"
                id="test6"
                onChange={this.hendelonChange}
                min="-30"
                max="300"
                value={this.state.test6}
              />
            </p>
            <label>Text-Z</label>
            <p className="range-field">
              <input
                type="range"
                id="test7"
                onChange={this.hendelonChange}
                min="-30"
                max="300"
                value={this.state.test7}
              />
            </p>
            <label>Text-R</label>
            <p className="range-field">
              <input
                type="range"
                id="test8"
                onChange={this.hendelonChange}
                min="-30"
                max="300"
                value={this.state.test8}
              />
            </p>
          </form>
        </div>
      </Style>
    );
  }
}

export default TextMiddle;
