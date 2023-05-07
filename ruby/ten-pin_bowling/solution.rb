require 'pry'
def bowling_score(frames)
  frames_array = frames.split(" ")
  total_score = 0
  frames_array.each_with_index do |frame, index|
    if index < 9
      if frame == 'X'
        strike_award = next_two_rolls(frames_array, index)
        total_score = total_score + frame_score(frame) + strike_award
      elsif !frame.match(/\//).nil?
        current_score = frame_score(frame)
        next_roll = frames_array[index + 1].split("").first
        next_roll = next_roll == 'X' ? 10 : next_roll.to_i
        total_score = total_score + current_score + next_roll
      else
        total_score = total_score + frame_score(frame)
      end
    else
      total_score += frame_score(frame)
    end
  end
  total_score
end
  
def frame_score(frame)
  rolls = frame.split("")
  rolls.reduce(0) do |sum, num|
    if num == 'X'
      sum + 10
    elsif num == '/'
      sum + (10 - sum)
    else
      sum + num.to_i
    end
  end
end

def next_two_rolls(frames_array, index)
  strike_award = 0
  next_frame = frames_array[index + 1]
  if next_frame == 'X'
    strike_award += frame_score(next_frame)
    second_roll = frames_array[index + 2].split("").first
    strike_award += frame_score(second_roll)
  else
    strike_award += frame_score(next_frame[0..1])
  end
  strike_award
end