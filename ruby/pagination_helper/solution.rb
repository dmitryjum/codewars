# TODO: complete this class

class PaginationHelper

  # The constructor takes in an array of items and a integer indicating how many
  # items fit within a single page
  attr_reader :item_count, :page_count
  def initialize(collection, items_per_page)
    @collection = collection
    @per_page = items_per_page
  end
  
  # returns the number of items within the entire collection
  def item_count
    item_count ||= @collection.size
  end
	
  # returns the number of pages
  def page_count
    page_count ||= (item_count.to_f / @per_page.to_f).ceil
  end
	
  # returns the number of items on the current page. page_index is zero based.
  # this method should return -1 for page_index values that are out of range
  def page_item_count(page_index)
    return -1 if (page_index + 1) > page_count
    (page_index + 1) == page_count ? item_count - @per_page * (item_count / @per_page) : @per_page
  end
	
  # determines what page an item is on. Zero based indexes.
  # this method should return -1 for item_index values that are out of range
  def page_index(item_index)
    return -1 if item_index >= item_count || item_index < 0
   (item_index / @per_page)
  end
end