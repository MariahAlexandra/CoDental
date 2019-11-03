#CATEGORY: Personal Info
  # Take user input of Name, Age and Gender

#CATEGORY: Symptoms
def q1(pain):
    # Question 1: Do you feel pain to any of your teeth?
    if pain == True:
            return "https://www.mayoclinic.org/diseases-conditions/tooth-abscess/symptoms-causes/syc-20350901"
    else:
            return -1

#CATEGORY: Habits
def q2(bleeding):
    # Question 2: Do you gums bleed while brushing or flossing?
    if bleeding == True:
        return "You are brushiong too hard. Take a look at this resouce: https://www.everydayhealth.com/hs/sensitive-teeth/brush-teeth-too-hard/"
    else:    
        return -1

#CATEGORY: Medicines
def q4(meds):
    # Question 4: Are you taking any medicine(s) including non-prescription medicine?
    if meds == True:
        return "https://www.guardiandirect.com/resources/articles/5-medications-may-be-causing-your-teeth-decay"
    else:
        return -1

#CATEGORY: Dental Insurance
def q5(insurance):
    #Question 5: Do you have Dental Insurance?
    if insurance == False:
        return "Dental Care Alternatives: https://www.dentalplans.com/dental-information/dental-insurance/dental-care-for-the-uninsured"
    else:
        return -1