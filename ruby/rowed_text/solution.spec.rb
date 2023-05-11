require './solution.rb'

RSpec.describe "#mixup_cypher" do
  context "reconstructs the string in column order by row count" do
    let(:test_string) { "JPMORGANISHIRING" }
    it "splits the string in columns with the odd column length of a rowCount number \
       and even one is 2 chars less than the first one and then joins them into the string" do
       row_number = 3
       expect(mixup_cypher(test_string, row_number)).to eq("JRIRPOGNSIIGMAHN")
    end

    it "example 2" do
      row_number = 4
      expect(mixup_cypher(test_string, row_number)).to eq("JARPGNIIMRIHNOSG")
    end

    it "example 3" do
      row_number = 5
      expect(mixup_cypher(test_string, row_number)).to eq("JIPNSGMAHNOGIIRR")
    end
  end
end