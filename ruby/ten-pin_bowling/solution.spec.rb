require './solution.rb'

RSpec.describe "#bowling_score" do
  context "main score calculating method" do
    it "it returns a total score for a frameset argument" do
      frame_set = '11 11 11 11 11 11 11 11 11 11'
      expect(bowling_score(frame_set)).to eq(20)
    end

    it "it returns a total score for the second frameset argument" do
      frame_set = 'X X X X X X X X X XXX'
      expect(bowling_score(frame_set)).to eq(300)
    end

    it "returns a total score for the third frameset argument" do
      frame_set = 'X X 9/ 80 X X 90 8/ 7/ 44'
      expect(bowling_score(frame_set)).to eq(171)
    end
  end

  context "helper method that calculates score per frame" do
    it "calculates the score of a single frame" do
      frame1 = "9/"
      expect(frame_score(frame1)).to eq(10)
      frame2 = "X"
      expect(frame_score(frame2)).to eq(10)
      frame3 = "45"
      expect(frame_score(frame3)).to eq(9)
    end
  end
end