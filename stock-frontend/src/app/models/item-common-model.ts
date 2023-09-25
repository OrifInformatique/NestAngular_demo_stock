import { ItemGroupModel } from './item-group-model';
import { ItemModel } from './item-model';
import { ItemTagLinkModel } from './item-tag-link-model';

export interface ItemCommonModel {
  item_common_id: number;
  name: string | null;
  description: string | null;
  image: string | null;
  linked_file: string | null;
  item_group: ItemGroupModel;
  items?: ItemModel[];
  item_tag_links: ItemTagLinkModel[];
}
