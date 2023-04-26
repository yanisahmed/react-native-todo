import {Text as RNText, View} from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { presets } from './text.presets';

export default function Text({children, preset='default', style}){
    textStyles = StyleSheet.compose(presets[preset], style);
    return <RNText style={textStyles}>{children}</RNText>
}