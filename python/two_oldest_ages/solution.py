def two_oldest_ages(ages):
    ages.sort()
    ages_length = len(ages)
    return [ages[ages_length - 2], ages[ages_length - 1]]