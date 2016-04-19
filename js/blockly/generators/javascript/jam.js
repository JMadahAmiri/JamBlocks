/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating JavaScript for procedure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';
goog.require('Blockly.JavaScript');

Blockly.JavaScript['jam_measure'] = function(block) {
  var time = block.getFieldValue('TIME_SIG');
  var containter = Blockly.JavaScript.valueToCode(block, 'CONTAINTER', Blockly.JavaScript.ORDER_ATOMIC);
  var branch = Blockly.JavaScript.statementToCode(block, 'NOTES');
  // TODO: Assemble JavaScript into code variable.
  var code = 'var time = "' + time + '";' +
			 branch;
  return code;
};

Blockly.JavaScript['jam_instrument'] = function(block) {
  var instrument = block.getFieldValue('instrument_selection');
  var clef = block.getFieldValue('clef_selection');
  var branch = Blockly.JavaScript.statementToCode(block, 'MEASURE');
  
  var code ='var delay = 0; '+ 
			'MIDI.programChange(0, MIDI.GM.byName["' + instrument + '"].number);' +
			branch;
  return code;
};

Blockly.JavaScript['jam_note'] = function(block) {
  var note = block.getFieldValue('NOTE');
  var register = block.getFieldValue('REGISTER');
  var key = note + register;
  var number = 60; //Start from middle C(C4) and move from there to the note number;
  var volume = block.getFieldValue('VOLUME');
  var length = block.getFieldValue('LENGTH');
  if(register == 5){
		number += 12; //Move up one octave
	}
	else if(register == 3){
		number -= 12; //Move down one octave
	}
//Move the Note Number based on the Note
switch(note) {
	case 'A': number += 9;
			break;
	case 'AS': number +=10;
			break;
	case 'B': number += 11;
			break;
	case 'CS': number += 1;
			break;
	case 'D': number += 2;
			break;
	case 'DS': number += 3;
			break;
	case 'E': number += 4;
			break;
	case 'F': number += 5;
			break;
	case 'FS': number += 6;
			break;
	case 'G': number += 7;
			break;
	case 'GS': number += 8;
			break;
	case 'R': volume = 0;
			break;
	default: break;
}
  var code =
			'var note = ' + number + '; ' + // the MIDI note
			'var velocity = 127;' + // how hard the note hits
			// play the note
			'MIDI.setVolume(0, ' + volume + ');' +
			'MIDI.noteOn(0, note, velocity, delay);' +
			'MIDI.noteOff(0, note, delay + ' + length + ');' +
			'delay += ' + length + ';'
  return code;
};
