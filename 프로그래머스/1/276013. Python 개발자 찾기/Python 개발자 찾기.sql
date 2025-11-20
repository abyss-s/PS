-- 코드를 작성해주세요
select 
    ID, EMAIL, FIRST_NAME, LAST_NAME
from developer_infos
where SKILL_1 = 'Python' or SKILL_2 = 'Python' or SKILL_3 = 'Python'
order by id