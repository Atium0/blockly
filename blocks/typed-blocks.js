/*
  Copyright 2016 Stefan Jacholke. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

/* Blocks from typed-blockly project
   https://github.com/UCSD-PL/typed-blockly
*/

// TODO, move blocks over to Haskell

Blockly.Blocks['logic_boolean_typed'] = {
  /**
   * Block for boolean data type: true and false.
   * @this Blockly.Block
   */
  init: function() {
    var BOOLEANS =
        [[Blockly.Msg.LOGIC_BOOLEAN_TRUE, 'TRUE'],
         [Blockly.Msg.LOGIC_BOOLEAN_FALSE, 'FALSE']];
    this.setHelpUrl(Blockly.Msg.LOGIC_BOOLEAN_HELPURL);
    this.setColour(210);
    this.setOutput(true, 'Boolean');
    // Sorin
    this.setOutputTypeExpr(new Blockly.TypeExpr('bool'));
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(BOOLEANS), 'BOOL');
    this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP);
  }
};

Blockly.Blocks['logic_compare_typed'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS = Blockly.RTL ? [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          ['>', 'LT'],
          ['\u2265', 'LTE'],
          ['<', 'GT'],
          ['\u2264', 'GTE']
        ] : [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          ['<', 'LT'],
          ['\u2264', 'LTE'],
          ['>', 'GT'],
          ['\u2265', 'GTE']
        ];
    this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
    this.setColour(210);
    this.setOutput(true, 'Boolean');
    // Sorin
    this.setOutputTypeExpr(new Blockly.TypeExpr('bool'));
    var A = Blockly.TypeVar.getUnusedTypeVar();
    this.appendValueInput('A')
        .setTypeExpr(A);
    this.appendValueInput('B')
        .setTypeExpr(A)
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'EQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
        'NEQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
        'LT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
        'LTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
        'GT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
        'GTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['logic_ternary_typed'] = {
  /**
   * Block for ternary operator.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LOGIC_TERNARY_HELPURL);
    this.setColour(210);
    var A = Blockly.TypeVar.getUnusedTypeVar();
    this.appendValueInput('IF')
        .setCheck('Boolean')
        .setTypeExpr(new Blockly.TypeExpr('bool'))
        .appendField(Blockly.Msg.LOGIC_TERNARY_CONDITION);
    this.appendValueInput('THEN')
        .setTypeExpr(A)
        .appendField(Blockly.Msg.LOGIC_TERNARY_IF_TRUE);
    this.appendValueInput('ELSE')
        .setTypeExpr(A)
        .appendField(Blockly.Msg.LOGIC_TERNARY_IF_FALSE);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setOutputTypeExpr(A);
    this.setTooltip(Blockly.Msg.LOGIC_TERNARY_TOOLTIP);
  }
};

// Stefan
Blockly.Blocks['numNumber'] = {
  /**
   * Block for numeric value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(210);
    var field = new Blockly.FieldNumber('0');
    field.setValidator(Blockly.FieldNumber.prototype.basicNumberValidator);
    this.appendDummyInput()
        .appendField(field, 'NUMBER');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};

// TODO, moves these to Haskell
Blockly.Blocks['numNumberPerc'] = {
  /**
   * Block for numeric value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(210);
    var field = new Blockly.FieldNumber('0');
    field.setValidator(Blockly.FieldNumber.prototype.basicNumberValidator);
    this.appendDummyInput()
        .appendField(field, 'NUMBER')
        .appendField(new Blockly.FieldLabel('%','blocklyTextEmph'));
    this.setOutput(true, 'Number');
    // Sorin
    this.setOutputTypeExpr(new Blockly.TypeExpr('Number'));
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};

Blockly.Blocks['math_arithmetic_typed'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.MATH_ADDITION_SYMBOL, 'ADD'],
         [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, 'MINUS'],
         [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, 'MULTIPLY'],
         [Blockly.Msg.MATH_DIVISION_SYMBOL, 'DIVIDE'],
         [Blockly.Msg.MATH_POWER_SYMBOL, 'POWER']];
    this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL);
    this.setColour(230);
    this.setOutput(true, 'Number');
    // Sorin
    this.setOutputTypeExpr(new Blockly.TypeExpr('int'));
    this.appendValueInput('A')
        .setTypeExpr(new Blockly.TypeExpr('int'))
        .setCheck('Number');
    this.appendValueInput('B')
        .setTypeExpr(new Blockly.TypeExpr('int'))
        .setCheck('Number')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ADD': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
        'MINUS': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
        'MULTIPLY': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
        'DIVIDE': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
        'POWER': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
      };
      return TOOLTIPS[mode];
    });
  }
};

Blockly.Blocks['lists_path'] = {
  init: function() {
    this.setColour(160);
    var pair = new Blockly.TypeExpr('pair', [new Blockly.TypeExpr('Number'), new Blockly.TypeExpr('Number')]);
    this.appendValueInput('LST')
        .setTypeExpr(new Blockly.TypeExpr('list',[pair]))
        .appendField(new Blockly.FieldLabel("Path","blocklyTextEmph") );
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr('Picture'));
  }
};

Blockly.Blocks['lists_length'] = {
  init: function() {
    var a = Blockly.TypeVar.getUnusedTypeVar();
    this.setColour(210);
    this.appendValueInput('LST')
        .setTypeExpr(new Blockly.TypeExpr('list',[a]))
        .appendField(new Blockly.FieldLabel("Length","blocklyTextEmph") );
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr('Number'));
  }
};

Blockly.Blocks['lists_create_with_typed'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(260);
    this.typeParams = { elmtType: Blockly.TypeVar.getUnusedTypeVar() };
    this.appendValueInput('ADD0')
        .setTypeExpr(this.typeParams.elmtType)
        .appendField(new Blockly.FieldLabel("List","blocklyTextEmph"));
    this.appendValueInput('ADD1')
        .setTypeExpr(this.typeParams.elmtType);
    this.appendValueInput('ADD2')
        .setTypeExpr(this.typeParams.elmtType);
    this.setOutput(true, 'Array');
    this.setOutputTypeExpr(new Blockly.TypeExpr('list', [this.typeParams.elmtType]));
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    this.itemCount_ = 3;
  },
  /**
   * Create XML to represent list inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    for (var x = 0; x < this.itemCount_; x++) {
      this.removeInput('ADD' + x);
    }
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    for (var x = 0; x < this.itemCount_; x++) {
      var input = this.appendValueInput('ADD' + x)
                      .setTypeExpr(this.typeParams.elmtType);
      if (x == 0) {
        input.appendField("List");
      }
    }
    if (this.itemCount_ == 0) {
      this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
    }
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock =
        workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    // Disconnect all input blocks and remove all inputs.
    if (this.itemCount_ == 0) {
      this.removeInput('EMPTY');
    } else {
      for (var x = this.itemCount_ - 1; x >= 0; x--) {
        this.removeInput('ADD' + x);
      }
    }
    this.itemCount_ = 0;
    // Rebuild the block's inputs.
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    while (itemBlock) {
      var input = this.appendValueInput('ADD' + this.itemCount_)
                      .setTypeExpr(this.typeParams.elmtType);
      if (this.itemCount_ == 0) {
        input.appendField("List");
      }
      // Reconnect any child blocks.
      if (itemBlock.valueConnection_) {
        input.connection.connect(itemBlock.valueConnection_);
      }
      this.itemCount_++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    if (this.itemCount_ == 0) {
      this.appendDummyInput('EMPTY')
          .appendField("[]");
    }
    this.renderMoveConnections_();
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + x);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      x++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  }
};


/**
 * Pairs
 */
Blockly.Blocks['pair_create_typed'] = {
  /**
   * Block for ternary operator.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(210);
    var A = Blockly.TypeVar.getUnusedTypeVar();
    var B = Blockly.TypeVar.getUnusedTypeVar();
    this.appendValueInput('FIRST')
        .setTypeExpr(A)
        .appendField(new Blockly.FieldLabel("Pair","blocklyTextEmph") );
    this.appendValueInput('SECOND')
        .setTypeExpr(B)
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr ("pair", [A, B]));
  }
};

Blockly.Blocks['pair_first_typed'] = {
  /**
   * Block for ternary operator.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(210);
    var A = Blockly.TypeVar.getUnusedTypeVar();
    var B = Blockly.TypeVar.getUnusedTypeVar();
    this.appendValueInput('PAIR')
        .setTypeExpr(new Blockly.TypeExpr ("pair", [A, B]))
        .appendField(new Blockly.FieldLabel("fst","blocklyTextEmph") );
    this.setOutput(true);
    this.setOutputTypeExpr(A);
  }
};

Blockly.Blocks['pair_second_typed'] = {
  /**
   * Block for ternary operator.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(210);
    var A = Blockly.TypeVar.getUnusedTypeVar();
    var B = Blockly.TypeVar.getUnusedTypeVar();
    this.appendValueInput('PAIR')
        .setTypeExpr(new Blockly.TypeExpr ("pair", [A, B]))
        .appendField(new Blockly.FieldLabel("snd","blocklyTextEmph") );
    this.setOutput(true);
    this.setOutputTypeExpr(B);
  }
};

/**
 * First class functions
 */

Blockly.Blocks.lambda_id = 0;

Blockly.Blocks['lambda_typed'] = {
  /**
   */
  init: function() {
    this.setColour(290);
    var A = Blockly.TypeVar.getUnusedTypeVar();
    var B = Blockly.TypeVar.getUnusedTypeVar();
    this.argName = 'X' + Blockly.Blocks.lambda_id;
    Blockly.Blocks.lambda_id++;
    this.appendDummyInput()
        .appendField('function with arg: ' + this.argName);
    this.appendValueInput('RETURN')
        .setTypeExpr(B)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr ("fun", [A, B]));
  },

  getVars: function () {
    return [this.argName];
  },

  getVarsWithTypes: function() {
    var result = {};
    result[this.argName] = this.outputConnection.typeExpr.children[0];
    return result;
  }
}

Blockly.Blocks['lambda_app_typed'] = {
  /**
   */
  init: function() {
    this.setColour(290);
    var A = Blockly.TypeVar.getUnusedTypeVar();
    var B = Blockly.TypeVar.getUnusedTypeVar();
    this.appendValueInput('FUN')
        .setTypeExpr(new Blockly.TypeExpr ("fun", [A, B]))
        .appendField('call function');
    this.appendValueInput('ARG')
        .setTypeExpr(A)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('with arg');
    this.setOutput(true);
    this.setOutputTypeExpr(B);
  },

  getVars: function () {
    return [this.argName];
  },

  getVarsWithTypes: function() {
    var result = {};
    result[this.argName] = this.outputConnection.typeExpr.children[0];
    return result;
  }
}

/**
 * Typed variables
 */

Blockly.Blocks['variables_get_typed'] = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(330);
    this.appendDummyInput()
        .appendField(Blockly.Msg.VARIABLES_GET_TITLE)
        .appendField(new Blockly.FieldVariable(
          Blockly.Msg.VARIABLES_GET_ITEM, this.createDropDownChangeFunction()), 'VAR')
        .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    this.contextMenuType_ = 'variables_set';
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter/setter block for this setter/getter.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getFieldValue('VAR');
    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', this.contextMenuType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  },

  createDropDownChangeFunction: function() {
    var self = this;
    return function(text) {
      var blocks = Blockly.mainWorkspace.getAllBlocks();
      for (var i = 0; i < blocks.length; i++) {
        if (blocks[i].getVarsWithTypes) {
          var varsWithTypes = blocks[i].getVarsWithTypes();
          if (text in varsWithTypes) {
            self.setOutputTypeExpr(varsWithTypes[text]);
          }
        }
      }
      return undefined;
    };
  }
};

Blockly.Blocks['text_typed'] = {
  /**
   * Block for text value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(45);
    this.appendDummyInput()
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput(''), 'TEXT')
        .appendField(this.newQuote_(false));
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr('Text'));
    this.setTooltip("Gives the given text");
  },
  /**
   * Create an image of an open or closed quote.
   * @param {boolean} open True if open quote, false if closed.
   * @return {!Blockly.FieldImage} The field image of the quote.
   * @this Blockly.Block
   * @private
   */
  newQuote_: function(open) {
    if (open == this.RTL) {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
    } else {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
    }
    return new Blockly.FieldImage(file, 12, 12, '"');
  }
};

Blockly.Blocks['lists_comprehension'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(260);
    this.vars_ = ['x','y','z'];
    var A = Blockly.TypeVar.getUnusedTypeVar();
    var B = Blockly.TypeVar.getUnusedTypeVar();
    var C = Blockly.TypeVar.getUnusedTypeVar();
    var OUT = Blockly.TypeVar.getUnusedTypeVar();
    this.appendValueInput("DO")
        .appendField(new Blockly.FieldLabel("List Comprehension","blocklyTextEmph"))
        .setTypeExpr(OUT);
    this.appendValueInput('VAR0')
          .setTypeExpr(new Blockly.TypeExpr ("list", [A]))
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(this.vars_[0])
          .appendField('\u2190');
    this.appendValueInput('VAR1')
          .setTypeExpr(new Blockly.TypeExpr ("list", [B]))
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(this.vars_[1])
          .appendField('\u2190');
    this.setOutput(true, 'Array');
    this.setOutputTypeExpr( new Blockly.TypeExpr("list", [OUT]) );
    this.setMutator(new Blockly.Mutator(['lists_comp_var', 'lists_comp_guard']));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    this.varCount_ = 2;
    this.guardCount_ = 0;
  },
  /**
   * Create XML to represent list inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('guardcount', this.guardCount_);
    container.setAttribute('varcount', this.varCount_);

    for (var i = 0; i < this.varCount_; i++) {
      var parameter = document.createElement('var');
      parameter.setAttribute('name', this.vars_[i]);
      
      container.appendChild(parameter);
    }

    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {

    for (var x = 0; x < this.varCount_; x++) {
      this.removeInput('VAR' + x);
    }
    for (var x = 0; x < this.guardCount_; x++) {
      this.removeInput('GUARD' + x);
    }

    this.varCount_ = parseInt(xmlElement.getAttribute('varcount'), 10);
    this.guardCount_ = parseInt(xmlElement.getAttribute('guardcount'), 10);

    for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
      if (childNode.nodeName.toLowerCase() == 'var') {
        var name = childNode.getAttribute('name');

        var A = Blockly.TypeVar.getUnusedTypeVar();
        var input = this.appendValueInput('VAR' + i)
            .setTypeExpr(new Blockly.TypeExpr ("list", [A]))
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(name)
            .appendField('\u2190');
      }
    }

    for (var x = 0; x < this.guardCount_; x++){
      var input = this.appendValueInput('GUARD' + x)
                      .setTypeExpr(new Blockly.TypeExpr ("Bool"))
                      .setAlign(Blockly.ALIGN_RIGHT)
                      .appendField('If');
    }


  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock =
        workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;

    for (var x = 0; x < this.varCount_; x++) {
      var itemBlock = workspace.newBlock('lists_comp_var');
      itemBlock.setFieldValue(this.vars_[x], 'NAME');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    for (var x = 0; x < this.guardCount_; x++) {
      var itemBlock = workspace.newBlock('lists_comp_guard');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }

    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    // Disconnect all input blocks and remove all inputs.
    for (var x = this.varCount_ - 1; x >= 0; x--) {
      this.removeInput('VAR' + x);
    }
    for (var x = this.guardCount_ - 1; x >= 0; x--) {
      this.removeInput('GUARD' + x);
    }



    this.varCount_ = 0;
    this.guardCount_ = 0;
    // Rebuild the block's inputs.
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    while (itemBlock) {
      if(itemBlock.type == 'lists_comp_var')
      {
        var A = Blockly.TypeVar.getUnusedTypeVar();
        var name = itemBlock.getFieldValue('NAME');
        this.vars_[this.varCount_] = name;
        var input = this.appendValueInput('VAR' + this.varCount_)
            .setTypeExpr(new Blockly.TypeExpr ("list", [A]))
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(name)
            .appendField('\u2190');

        // Reconnect any child blocks.
        if (itemBlock.valueConnection_) {
          input.connection.connect(itemBlock.valueConnection_);
        }
        this.varCount_++;
      }
      else if(itemBlock.type == 'lists_comp_guard')
      {
          var input = this.appendValueInput('GUARD' + this.guardCount_)
                          .setTypeExpr(new Blockly.TypeExpr ("Bool"))
                          .setAlign(Blockly.ALIGN_RIGHT)
                          .appendField('If');
          if (itemBlock.valueConnection_) {
            input.connection.connect(itemBlock.valueConnection_);
          }
          this.guardCount_++;
      }

      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    this.renderMoveConnections_();
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 0;
    while (itemBlock) {
      var input = this.getInput('VAR' + x);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      x++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  }
};

Blockly.Blocks['lists_comp_var'] = {
  /**
   * Mutator block for procedure argument.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('x'), 'NAME')
        .appendField('\u2190');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.setTooltip('Assign a binding to a list');
    this.contextMenu = false;
  }
};

Blockly.Blocks['lists_comp_guard'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("Guard");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("Guard against a boolean expression");
    this.contextMenu = false;
  }
};





Blockly.Blocks['variables_get_lists'] = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(330);
    var dropdown = new Blockly.FieldDropdown(this.genMenu, this.createDropdownChangeFunction());
    dropdown.master = this;
    this.appendDummyInput()
        .appendField(dropdown,"VAR");
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter/setter block for this setter/getter.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
  },

  createDropdownChangeFunction: function() {
    var self = this;
    return function(text) {
    var par = self.getParent();
    var varList = [];
    // get type of most immediate parent declaring the variable
    while(par)
    {
      if(par.type == "lists_comprehension")
      {
        for(var i =0; i < par.varCount_; i++)
        {
          if(par.vars_[i] == text)
          {
            var inp = par.getInput("VAR" + i);

            var tp = inp.getTypeExpr().children[0];

            self.setOutputTypeExpr(tp);
            self.setColourByType(tp);

            self.outputConnection.targetConnection.setTypeExpr(tp); // This actually changes the connector, but not the output expressino of the block

            par.render();
            self.render();

            return undefined;    
          }
        }
      }
      par = par.getParent();
    }
    return undefined;
    };
  },

  genMenu: function() {
    var def = [["None","None"]];

    if(!this.master)
      return def; 

    var par = this.master.getParent();

    var varList = [];

    while(par)
    {
      if(par.type == "lists_comprehension")
      {
        for(var i =0; i < par.varCount_; i++)
        {
          varList.push([par.vars_[i], par.vars_[i]]);
        }
      }
      par = par.getParent();
    }
    if(varList.length < 1)
      return def;
    return varList;
  }
};

Blockly.Blocks['lists_numgen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[");
    this.appendValueInput("LEFT")
        .setTypeExpr(new Blockly.TypeExpr('Number'));
    this.appendValueInput("RIGHT")
        .appendField("...")
        .setTypeExpr(new Blockly.TypeExpr('Number'));
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr('list',[new Blockly.TypeExpr('Number')]));
    this.setColour(Blockly.Blocks.lists.HUE);
    this.setTooltip('Generates a list of numbers between the first and second inputs');
  }
};







Blockly.Blocks['take_func_test'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(210);
    this.setOutput(true, 'Boolean');
    this.setOutputTypeExpr(new Blockly.TypeExpr('Picture'));

    var A = Blockly.TypeVar.getUnusedTypeVar();
    this.appendValueInput('A')
        .setTypeExpr(new Blockly.TypeExpr('Function_', 
              [new Blockly.TypeExpr('Number'),new Blockly.TypeExpr('Number'), new Blockly.TypeExpr('Number'), new Blockly.TypeExpr('Bool') ]  ));
    this.appendValueInput('B')
        .setTypeExpr(new Blockly.TypeExpr('Number'))
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
  }
};

Blockly.Blocks['func_test'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(210);
    this.setOutput(true, 'Boolean');
    this.setOutputTypeExpr(new Blockly.TypeExpr('Function_', 
              [new Blockly.TypeExpr('Number'),new Blockly.TypeExpr('Number'), new Blockly.TypeExpr('Number'), new Blockly.TypeExpr('Bool') ]  ));

    this.appendDummyInput()
        .appendField('Niemand');
    this.appendValueInput('A')
        .setTypeExpr(new Blockly.TypeExpr('Number'));
    this.appendValueInput('B')
        .setTypeExpr(new Blockly.TypeExpr('Number'))
    this.appendValueInput('A')
        .setTypeExpr(new Blockly.TypeExpr('Number'));

    // Assign 'this' to a variable for use in the tooltip closure below.
  }
};


Blockly.Blocks['cwAnimationOf'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(0);
    this.setOutput(false);

    var A = Blockly.TypeVar.getUnusedTypeVar();
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabel('Animation Of', 'blocklyTextEmph'));
    this.appendValueInput('FUNC')
        .setTypeExpr(new Blockly.TypeExpr('Function_', 
              [new Blockly.TypeExpr('Number'), new Blockly.TypeExpr('Picture') ]  ));
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
  }
};


