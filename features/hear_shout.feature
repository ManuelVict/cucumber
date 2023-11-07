Feature: Hear shout 
    Scenario: Listener is within range
        Given Lucy  is located 15 metres from seam
        When Seam shouts "free beagle at seam's"
        Then Lucy hears Seam´s message 