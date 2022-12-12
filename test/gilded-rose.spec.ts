import {GildedRose} from '../app/gilded-rose';
import {Item} from '../app/item';

function getItems(): Array<Item> {
    return [
        new Item('+5 Dexterity Vest', 10, 20),
        new Item('Aged Brie', 2, 0),
        new Item('Elixir of the Mongoose', 5, 7),
        new Item('Sulfuras, Hand of Ragnaros', 0, 80),
        new Item('Sulfuras, Hand of Ragnaros', -1, 80),
        new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
        new Item('Conjured Mana Cake', 3, 6),
    ];
}

describe('Gilded Rose', () => {
    it('should foo', () => {
        const gildedRose = new GildedRose(getItems());
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe('fixme');
    });
});
