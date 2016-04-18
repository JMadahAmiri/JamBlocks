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
  var dropdown_time_sig = block.getFieldValue('TIME_SIG');
  var value_containter = Blockly.JavaScript.valueToCode(block, 'CONTAINTER', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['jam_instrument'] = function(block) {
  var instrument = block.getFieldValue('instrument_selection');
  var dropdown_clef_selection = block.getFieldValue('clef_selection');
  var branch = Blockly.JavaScript.statementToCode(block, 'MEASURE');
  // TODO: Assemble JavaScript into code variable.
  var code ='MIDI.programChange(0, MIDI.GM.byName["' + instrument + '"].number);' +
			branch;
  return code;
};

Blockly.JavaScript['jam_note'] = function(block) {
  var note = block.getFieldValue('NOTE');
  var register = block.getFieldValue('REGISTER');
  var volume = block.getFieldValue('VOLUME');
  var length = block.getFieldValue('LENGTH');
  // TODO: Assemble JavaScript into code variable.
  var code =
			'var delay = 0; ' + // play one note every quarter second
			'var note = 50; ' + // the MIDI note
			'var velocity = 127; ' + // how hard the note hits
			// play the note
			'MIDI.setVolume(0, 127);' +
			'MIDI.noteOn(0, note, velocity, delay);' +
			'MIDI.noteOff(0, note, delay + 0.75);'
  return code;
};
