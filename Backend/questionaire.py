def q1(info):

    # Question 1: Do you feel pain to any of your teeth?
    if info["pain"] == True:
        if info["fever"] == True:
            return "https://www.mayoclinic.org/diseases-conditions/tooth-abscess/symptoms-causes/syc-20350901"
        else:
            return "Go see a Dentist."

def q2(info):
    # Question 2: Do you gums bleed while brushing or flossing?
    if info["bleeding"] == True:
        if info["brushing too hard"] == True:
            return "https://www.everydayhealth.com/hs/sensitive-teeth/brush-teeth-too-hard/"
        if info["flossing"] == False:
            return "https://www.medicalnewstoday.com/articles/241721.php#complications"
        else:
            return -1

def q3(info):
    # Question 3: Do you use tobacco?
        if info["tobacco"] == True:
            return "Gum Disease: https://www.webmd.com/oral-health/features/gums-problems-gingivitis#1"
        else:
            return -1
        
    # Question 4: Are you taking any medicine(s) including non-prescription medicine?
        if info["medicine"] == True:
            return "https://www.guardiandirect.com/resources/articles/5-medications-may-be-causing-your-teeth-decay"
        else:
            return -1
    # Question 5: Do you or have you used illegal substances?
        if info["illegal substances"] == True:
            return "https://www.webmd.com/oral-health/drug-abuse-mouth#1"
        else:
            return -1

        
        