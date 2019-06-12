import React, { Component } from 'react';
import {
    AlphaPicker,
    BlockPicker,
    ChromePicker,
    CirclePicker,
    CompactPicker,
    GithubPicker,
    HuePicker,
    MaterialPicker,
    PhotoshopPicker,
    SketchPicker,
    SliderPicker,
    SwatchesPicker,
    TwitterPicker
} from 'react-color';

class ColorPicer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <p>Color ColorPicer</p>

                <AlphaPicker />
                <BlockPicker />
                <ChromePicker />
                <CirclePicker />
                <CompactPicker />
                <GithubPicker />
                <HuePicker />
                <MaterialPicker />
                <PhotoshopPicker />
                <SketchPicker />
                <SliderPicker />
                <SwatchesPicker />
                <TwitterPicker />
            </React.Fragment>
        )
    }
}
export default ColorPicer