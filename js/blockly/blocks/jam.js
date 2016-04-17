/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Logic blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.require('Blockly.Blocks');

Blockly.Blocks['jam_measure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Measure");
    this.appendDummyInput()
        .appendField("Time Signature")
        .appendField(new Blockly.FieldDropdown([["4/4", "FOURFOUR"], ["3/4", "THREEFOUR"]]), "TIME_SIG");
    this.appendValueInput("CONTAINTER")
        .setCheck("container")
        .appendField("Containter");
    this.appendValueInput("NOTES")
        .setCheck("jam_note")
        .appendField("Notes");
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['jam_instrument'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Instrument")
        .appendField(new Blockly.FieldDropdown([["Piano", "PIANO"], ["Trumpet", "TRUMPET"], ["Flute", "FLUTE"]]), "instrument_selection");
    this.appendDummyInput()
        .appendField("Clef")
        .appendField(new Blockly.FieldDropdown([["Treble", "TREBLE"], ["Bass", "BASS"]]), "clef_selection");
    this.appendDummyInput()
        .appendField("Time Signature")
        .appendField(new Blockly.FieldDropdown([["4/4", "FOURFOUR"], ["3/4", "THREEFOUR"]]), "TIME_SIG");
    this.appendValueInput("CONTAINTER")
        .setCheck("container")
        .appendField("Containter");
    this.appendValueInput("NOTES")
        .setCheck("jam_note")
        .appendField("Notes");
    this.setOutput(true, null);
    this.setInputsInline(false);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['jam_note'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Note")
        .appendField(new Blockly.FieldDropdown([["A", "P_A"], ["B", "P_B"], ["C", "P_C"]]), "NOTE");
    this.appendDummyInput()
        .appendField("Register")
        .appendField(new Blockly.FieldDropdown([["High", "HIGH"], ["Middle", "MIDDLE"], ["Low", "LOW"]]), "REGISTER");
    this.appendDummyInput()
        .appendField("Volume")
        .appendField(new Blockly.FieldDropdown([["100", "V_100"], ["90", "V_90"], ["80", "V_80"]]), "VOLUME");
    this.appendDummyInput()
        .appendField("Length")
        .appendField(new Blockly.FieldDropdown([["1/8", "EIGHTH"], ["1/4", "QUARTER"], ["1/2", "HALF"]]), "LENGTH");
    this.appendValueInput("NAME")
        .setCheck("jam_note")
        .appendField("Note");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};