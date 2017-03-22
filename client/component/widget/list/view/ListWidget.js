/**
 * Created by Riccardo Montagnin on 21/03/2017.
 */
class ListWidget extends ListWidgetView{

    /**
     * @type {Object}
     */
    _presenter;

    constructor(){
        super();
        this._presenter = new ListWidgetPresenter(this);
    }

    addItem(item) {
        this._presenter.addItem(item);
    }

    setCharacter(character) {
        this._presenter.setCharacter(character);
    }

    setColor(color) {
        this._presenter.setColor(color);
    }

    renderView(){
        return this._presenter.renderView();
    }
}