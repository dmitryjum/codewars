def score( dice )
  {}.tap do |res|
    dice.each do |d|
      if res[d].nil?
        res[d] = {'count' => 1, 'score' => 0}
      else
        res[d]['count'] += 1
      end

      if res[d]['count'] < 3 || res[d]['count'] > 3
        if d == 1
          res[d]['score'] += 100
        elsif d == 5
          res[d]['score'] += 50
        end
      elsif res[d]['count'] == 3
        if d == 1
          res[d]['score'] = 1000
        elsif d == 5
          res[d]['score'] = d*100
        else
          res[d]['score'] = d*100
        end
      end
    end
  end.values.reduce(0) {|sum, die| sum + die['score']}
end