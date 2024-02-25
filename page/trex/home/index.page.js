import { log as Logger } from '@zos/utils';
import AutoGUI from '@silver-zepp/autogui';
import { getSedentaryState } from '../../../utils';

const logger = Logger.getLogger("SedentaryAlert");
Page({
  
  state: {
    sedentary: null
  },

  onInit() {
    logger.debug("page onInit invoked");
    this.state.sedentary = getSedentaryState();
  },

  onDestroy() {
    logger.debug("page onDestroy invoked");
  },

  build() {
    logger.debug('page build invoked');
    this.buildState();
  },

  buildState() { //custom function

    const sedentaryState = this.state.sedentary;
    const activityString = sedentaryState.activityNeeded == 0 ? "-" : (sedentaryState.activitySoFar + "/" + sedentaryState.activityNeeded );

    const gui = new AutoGUI();
    const titleOptions = { text_size: 25 };
    const valueOptions = { text_size: 20, color: 0xcccccc };

    gui.spacer(); gui.newRow();
    const activeTargetTitle = gui.text("Activity Target", titleOptions); gui.newRow();
    const activeTargetValue = gui.text(activityString, valueOptions); gui.newRow();
    
    gui.spacer(); gui.newRow();

    const alertInTitle = gui.text("Alert In", titleOptions); gui.newRow();
    const alertInValue = gui.text("-", valueOptions); gui.newRow();
    
    gui.spacer(); gui.newRow();
    
    const lastActiveTitle = gui.text("Last Active", titleOptions); gui.newRow();
    const lastActiveValue = gui.text("-", valueOptions); gui.newRow();
    gui.spacer(); gui.newRow();
    
    gui.render();
  },

});
