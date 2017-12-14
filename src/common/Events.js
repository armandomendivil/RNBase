import EventEmitter from "@services/AppEventEmitter";
import { Constants } from "@common"

const closeModalLayout = () => EventEmitter.emit('modal.layout.close');

const openModalLayout = () => EventEmitter.emit('modal.layout.open');
const onOpenModalLayout = (func) => EventEmitter.addListener("modal.layout.open", func);

export default ({
  openModalLayout,
  closeModalLayout,
  onOpenModalLayout,
});
