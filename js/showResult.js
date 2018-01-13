/**
 * Created by Milena on 02/11/2017.
 */
function showResult() {
    let query = window.location.search;
    let variables = query.split('?')[1];
    let v = variables.split('=');
    let result = decodeURIComponent(v[1]);

    result = Math.round(result*100)/100;

    let info = document.getElementById("info");

    if(result >= 0.02 && result <= 0.03)info.value =
        "0.02-0.03 BAC: No loss of coordination," +
        " slight euphoria and loss of shyness. " +
        "Depressant effects are not apparent. " +
        "Mildly relaxed and maybe a little lightheaded.";
    else if(result >= 0.04 && result <= 0.06)info.value =
        "0.04-0.06 BAC: Feeling of well-being, relaxation," +
        " lower inhibitions, sensation of warmth. Euphoria. " +
        "Some minor impairment of reasoning and memory, lowering of caution. " +
        "Your behavior may become exaggerated and emotions intensified " +
        "(Good emotions are better, bad emotions are worse)";
    else if(result >= 0.07 && result <= 0.09)info.value =
        "0.07-0.09 BAC: Slight impairment of balance, speech, vision, reaction time," +
        " and hearing. Euphoria. Judgment and self-control are reduced, and caution, " +
        "reason and memory are impaired, .08 is legally impaired and it is illegal to " +
        "drive at this level. You will probably believe that you are functioning " +
        "better than you really are.";
    else if(result >= 0.10 && result <= 0.125) info.value =
        "0.10-0.125 BAC: Significant impairment of motor coordination and loss of " +
        "good judgment. Speech may be slurred; balance, vision, reaction time and " +
        "hearing will be impaired. Euphoria.";
    else if(result >= 0.13 && result <= 0.15) info.value =
        "0.13-0.15 BAC: Gross motor impairment and lack of physical control. " +
        "Blurred vision and major loss of balance. Euphoria is reduced and dysphoria " +
        "(anxiety, restlessness) is beginning to appear. " +
        "Judgment and perception are severely impaired.";
    else if(result >= 0.16 && result <= 0.19) info.value =
        "0.16-0.19 BAC: Dysphoria predominates, nausea may appear. " +
        "The drinker has the appearance of a \"sloppy drunk.\"";
    else if(result >= 0.20 && result < 0.25) info.value =
        "Over 0.20 BAC: Felling dazed, confused or otherwise disoriented. " +
        "May need help to stand or walk. If you injure yourself you may not " +
        "feel the pain. Some people experience nausea and vomiting at this level. " +
        "The gag reflex is impaired and you can choke if you do vomit. " +
        "Blackouts are likely at this level so you may not remember what has happened.";
    else if(result >= 0.25 && result < 0.30) info.value =
        "Over 0.25 BAC: All mental, physical and sensory functions are severely impaired. " +
        "Increased risk of asphyxiation from choking on vomit and of seriously " +
        "injuring yourself by falls or other accidents.";
    else if(result >= 0.30 && result < 0.35) info.value =
        "Over 0.30 BAC: STUPOR. You have little comprehension of where you are. " +
        "You may pass out suddenly and be difficult to awaken.";
    else if(result >= 0.35 && result < 0.40) info.value =
        "Over 0.35 BAC: Coma is possible. This is the level of surgical anesthesia.";
    else if(result >= 0.40)info.value =
        "Over 0.40 BAC: Onset of coma, and possible death due to respiratory arrest.";


    document.getElementById('result1').value = result;
}